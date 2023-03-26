function PressureScreen({pressure}) {
    const mmghPressure = pressure * 760;
    return (
        <div className="bg-primary-dark w-1/2 h-40 flex items-center rounded-3xl justify-center">
            <div className="flex flex-col">
                <div className="text-primary-purple w-40 h-6 text-center text-xl">Presión</div>
                <div className="text-primary-purple w-40 h-6 text-center text-xl jus">{pressure}atm/</div>
                <div className="text-primary-purple w-40 h-6 text-center text-xl jus">{mmghPressure}mmgh</div>
            </div>
        </div>
    );
}

export default PressureScreen;