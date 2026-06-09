import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: any) {
    console.error('3D gallery crashed:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="absolute inset-0 flex items-center justify-center p-6 text-white">
          <div className="max-w-lg bg-red-900/60 rounded-2xl p-6 backdrop-blur-md border border-red-400/40">
            <p className="text-lg font-bold mb-2">3D 影像空间渲染出错</p>
            <pre className="text-xs whitespace-pre-wrap break-all opacity-80">
              {String(this.state.error?.message || this.state.error)}
            </pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
