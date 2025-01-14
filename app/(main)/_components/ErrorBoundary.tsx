import React, { Component, ReactNode } from 'react';
import Logo from './Logo';

interface ErrorBoundaryProps {
    children: ReactNode;
    fallback?: ReactNode; // Optional custom fallback UI
}

interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        // Update state to show fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        // Log the error to an error reporting service
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Render a custom fallback UI
            return this.props.fallback || (
                <div className='flex-grow w-full p-3'>
                    <div className="w-full h-full font-sans text-center flex justify-around items-center bg-slate-900  rounded-md">
                        <div className='flex flex-col space-y-3'>
                            <div className='w-[100px] mx-auto'>
                            <Logo/>
                            </div>
                            <h1 className='text-xl font-sans font-bold'>Something went wrong.</h1>
                            <code className='text-red-500 bg-slate-800/40 p-3 rounded-md'>{this.state.error?.message}</code>
                        </div>
                    </div>
                </div>
            );
        }

        // Render children if no error occurred
        return this.props.children;
    }
}

export default ErrorBoundary;
