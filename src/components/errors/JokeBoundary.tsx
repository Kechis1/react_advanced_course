import React, {ErrorInfo, PropsWithChildren} from "react";
import {Simulate} from "react-dom/test-utils";

type Props = PropsWithChildren;

type State = {
    hasError: boolean;
    error?: unknown;
}

export class JokeBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: unknown) {
        return { hasError: true, error };
    }

    // optional
    componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
        console.error(error, errorInfo);
    }

    render() {
        const {error, hasError} = this.state;

        if (hasError) {
            // fallback
            return  (<>
                <h1 className={"text-9xl text-red-500"}>Oops</h1>
                <h2>Something went wrong!</h2>
                {String(error)}
            </>);
        }

        return this.props.children;
    }
}