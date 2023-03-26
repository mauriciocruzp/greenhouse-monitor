function TemperatureScreen({ temperature }) {
    return (
        <div className="bg-primary-dark w-full h-40 flex items-center rounded-3xl justify-center">
            <div className="flex flex-col">
                <div className="text-primary-purple w-48 h-6 text-center text-xl">Temperatura</div>
                <div className="text-primary-purple w-48 h-14 text-center text-6xl">{temperature}°</div>
            </div>
        </div>
    );
}

export default TemperatureScreen;