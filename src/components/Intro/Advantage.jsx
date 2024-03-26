// ./src/components/Intro/Advantage.jsx

const Advantage = (props) => {
    const { h3, h11, p1, h12, p2, h13, p3, link, disappear } = props;

    return (
        <div className={`font-jost container mx-auto px-3 transition-opacity duration-300 md:px-7 lg:px-10 max-sm: ${disappear}`}>
            <h3 className={`text-5xl font-bold max-sm:text-4xl`}>{h3}</h3>
            <ul className={`list-disc`}>
                <li>
                    <h1 className="text-2xl font-semibold mt-4">{h11}</h1>
                    <p className="mt-2 text-lg text-gray-600">{p1}</p>
                </li>
                <li>
                    <h1 className="text-2xl font-semibold mt-4">{h12}</h1>
                    <p className="mt-2 text-lg text-gray-600">{p2}</p>
                </li>
                <li>
                    <h1 className="text-2xl font-semibold mt-4">{h13}</h1>
                    <p className="mt-2 text-lg text-gray-600">{p3}</p>
                </li>
            </ul>
            <button className="px-4 py-2 mt-4 bg-yellow-500 text-xl font-semibold rounded-md"><a href={link}>Pelajari Lebih lanjut</a></button>
        </div>
    )
}

export default Advantage