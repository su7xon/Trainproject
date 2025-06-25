import React, { useRef, useEffect } from 'react';
import { Train } from 'lucide-react';

const Train3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 400;
    canvas.height = 200;

    let animationFrame: number;
    let offset = 0;

    const drawTrain = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#87CEEB');
      gradient.addColorStop(1, '#E0F6FF');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Railway tracks
      ctx.strokeStyle = '#8B4513';
      ctx.lineWidth = 4;
      for (let i = 0; i < canvas.width; i += 20) {
        ctx.beginPath();
        ctx.moveTo(i + offset % 20, canvas.height - 30);
        ctx.lineTo(i + 15 + offset % 20, canvas.height - 30);
        ctx.stroke();
      }

      // Train body (3D effect)
      const trainX = 50 + Math.sin(Date.now() * 0.001) * 10;
      const trainY = canvas.height - 80;

      // Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(trainX + 5, trainY + 45, 280, 10);

      // Main body
      ctx.fillStyle = '#DC2626';
      ctx.fillRect(trainX, trainY, 280, 40);
      
      // 3D top
      ctx.fillStyle = '#EF4444';
      ctx.beginPath();
      ctx.moveTo(trainX, trainY);
      ctx.lineTo(trainX + 20, trainY - 15);
      ctx.lineTo(trainX + 300, trainY - 15);
      ctx.lineTo(trainX + 280, trainY);
      ctx.closePath();
      ctx.fill();

      // 3D side
      ctx.fillStyle = '#B91C1C';
      ctx.beginPath();
      ctx.moveTo(trainX + 280, trainY);
      ctx.lineTo(trainX + 300, trainY - 15);
      ctx.lineTo(trainX + 300, trainY + 25);
      ctx.lineTo(trainX + 280, trainY + 40);
      ctx.closePath();
      ctx.fill();

      // Windows
      ctx.fillStyle = '#60A5FA';
      for (let i = 0; i < 6; i++) {
        ctx.fillRect(trainX + 20 + i * 40, trainY + 8, 25, 15);
      }

      // Wheels
      ctx.fillStyle = '#374151';
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(trainX + 40 + i * 60, trainY + 45, 12, 0, Math.PI * 2);
        ctx.fill();
        
        // Wheel spokes
        ctx.strokeStyle = '#6B7280';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(trainX + 40 + i * 60 - 8, trainY + 45);
        ctx.lineTo(trainX + 40 + i * 60 + 8, trainY + 45);
        ctx.moveTo(trainX + 40 + i * 60, trainY + 45 - 8);
        ctx.lineTo(trainX + 40 + i * 60, trainY + 45 + 8);
        ctx.stroke();
      }

      // Front light
      ctx.fillStyle = '#FEF3C7';
      ctx.beginPath();
      ctx.arc(trainX + 10, trainY + 20, 8, 0, Math.PI * 2);
      ctx.fill();

      // Smoke (animated)
      ctx.fillStyle = 'rgba(156, 163, 175, 0.6)';
      for (let i = 0; i < 5; i++) {
        const smokeX = trainX + 30 + i * 15 + Math.sin(Date.now() * 0.003 + i) * 5;
        const smokeY = trainY - 20 - i * 8;
        ctx.beginPath();
        ctx.arc(smokeX, smokeY, 8 - i, 0, Math.PI * 2);
        ctx.fill();
      }

      offset += 2;
      animationFrame = requestAnimationFrame(drawTrain);
    };

    drawTrain();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="rounded-lg shadow-lg border border-gray-200"
        style={{ maxWidth: '100%', height: 'auto' }}
      />
      <div className="absolute bottom-2 right-2 bg-white bg-opacity-90 px-2 py-1 rounded text-xs text-gray-600">
        3D Train Animation
      </div>
    </div>
  );
};

export default Train3D;