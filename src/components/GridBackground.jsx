import React, { useEffect, useRef } from 'react';

const GridBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];
    let animationFrameId;

    const mouse = {
      x: null,
      y: null,
      radius: 200 // Un radio de atracción un poco mayor para que se note en el grid
    };

    const initCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles();
    };

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.baseX = x; // Guardamos su posición original en el grid
        this.baseY = y;
        this.size = 1.2; // Más pequeñas
        this.density = (Math.random() * 20) + 10;
        this.vx = 0;
        this.vy = 0;
      }

      draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'; // Un poco más negras
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        // Lógica de atracción hacia el cursor
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = mouse.radius;
            let force = (maxDistance - distance) / maxDistance;
            
            // Fuerza de atracción
            let directionX = forceDirectionX * force * this.density * 0.05;
            let directionY = forceDirectionY * force * this.density * 0.05;

            this.vx += directionX;
            this.vy += directionY;
          }
        }
        
        // Efecto liga (Spring): Las partículas siempre intentan volver a su punto original en el grid
        let dxBase = this.baseX - this.x;
        let dyBase = this.baseY - this.y;
        this.vx += dxBase * 0.03; // Fuerza con la que regresan a su lugar
        this.vy += dyBase * 0.03;

        // Fricción para que frenen suavemente y no vibren para siempre
        this.vx *= 0.85;
        this.vy *= 0.85;

        // Aplicamos la velocidad
        this.x += this.vx;
        this.y += this.vy;
      }
    }

    const initParticles = () => {
      particles = [];
      let spacing = 35; // Distancia exacta en píxeles entre cada punto (el grid)
      
      // Llenamos la pantalla en forma de cuadrícula (matriz)
      for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
          particles.push(new Particle(x, y));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    initCanvas();
    animate();

    const handleResize = () => {
      initCanvas();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        pointerEvents: 'none'
      }}
    />
  );
};

export default GridBackground;
