function BioTopic({ model, manufacturer, year, carvin }) {
    return (
        <>
            <div className="mt-6 text-base text-zinc-600 max-w-2xl mb-16">
                <h1>
                    <b>Full Specs</b>
                </h1>
                <ul>
                    <li>
                        Model: {model}
                    </li>
                    <li>
                        Manufacturer: {manufacturer}
                    </li>
                    <li>
                        Year: {year}
                    </li>
                    <li>
                        VIN: {carvin}
                    </li>
                </ul>
            </div>
        </>



    );
}

export default BioTopic;