type LoadingSpinnerProps = {
  message?: string;
  className?: string;
};

export default function LoadingSpinner({
  message = '正在生成 3D 照片球...',
  className = '',
}: LoadingSpinnerProps) {
  return (
    <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-black ${className}`}>
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <div className="absolute inset-0 rounded-full border-4 border-purple-500/30"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"></div>
          <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-pink-500 animate-spin" style={{ animationDuration: '1.5s' }}></div>
          <div className="absolute inset-8 rounded-full border-4 border-transparent border-t-blue-500 animate-spin" style={{ animationDuration: '2s' }}></div>
        </div>
        <p className="text-white text-xl animate-pulse">{message}</p>
      </div>
    </div>
  );
}
