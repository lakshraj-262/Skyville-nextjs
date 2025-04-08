
const Loading = () => {
    return (
        <div className="flex justify-center items-center h-64">
            <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-n-1/20 border-t-color-1 rounded-full animate-spin" />
                <p className="text-n-1/80 font-medium">Loading...</p>
            </div>
        </div>
    )
}

export default Loading


