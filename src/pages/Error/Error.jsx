const Error = () => {
    return (
        <div>
            <div className="diff aspect-[16/9]">
                <div className="diff-item-1">
                    <div className="bg-red-600 text-primary-content text-9xl font-black grid place-content-center">404 Error</div>
                </div>
                <div className="diff-item-2">
                    <div className="bg-base-200 text-9xl font-black grid place-content-center">Not Found</div>
                </div>
                <div className="diff-resizer"></div>
            </div>
        </div>
    );
};

export default Error;