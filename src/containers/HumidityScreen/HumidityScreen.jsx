function HumidityScreen({humidity}) {
    return (
        <div className="bg-primary-dark w-full h-40 flex items-center rounded-3xl justify-center">
            <div className="flex flex-col">
                <div className="text-primary-purple w-40 h-6 text-center text-xl">Humedad</div>
                <div className="text-primary-purple w-40 h-14 text-center text-6xl">{humidity}%</div>
            </div>
        </div>
    );
}

export default HumidityScreen;