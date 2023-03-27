function PressureScreen({pressure}) {
    let mmghPressure = pressure * 760;
    mmghPressure = Math.round((mmghPressure + Number.EPSILON) * 100) / 100;
    pressure = Math.round((pressure + Number.EPSILON) * 100) / 100;
    return (
        <div className="bg-primary-dark w-full h-40 flex items-center rounded-3xl justify-center">
            <div className="flex flex-col">
                <div className="text-primary-purple w-40 h-6 text-center text-xl">Presión</div>
                <div className="text-primary-purple w-40 h-6 text-center text-xl jus">{pressure}atm/</div>
                <div className="text-primary-purple w-40 h-6 text-center text-xl jus">{mmghPressure}mmHg</div>
            </div>
        </div>
    );
}

export default PressureScreen;
