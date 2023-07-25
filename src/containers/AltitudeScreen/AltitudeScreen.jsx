function AltitudeScreen({ altitude }) {
    altitude = Math.round((altitude + Number.EPSILON) * 100) / 100;
    return (<div className="bg-primary-dark w-full h-40 flex items-center rounded-3xl justify-center">
        <div className="flex flex-col">
            <div className="text-primary-purple w-48 h-6 text-center text-xl">Altitud</div>
            <div className="text-primary-purple w-48 h-14 text-center text-4xl">{altitude}msnm</div>
        </div>
    </div>);
}

export default AltitudeScreen;