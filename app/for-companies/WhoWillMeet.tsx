import Container from "../components/Container"
import Typography from "../components/Typography";

const countsData = [
    {
        count: '300+',
        title: "Master Students",
        label: "Highly motivated master’s students from diverse life science disciplines",
    },
    {
        count: '150+',
        title: "PhD Candidates",
        label: "Doctoral researchers engaged in cutting-edge scientific research",
    },
    {
        count: '50+',
        title: "Global Ranking",
        label: "Internationally recognized institutions and companies ranked worldwide",
    },
];

const WhoWillMeet = () => {
    return (
        <section className="flex items-center justify-center">
            <Container>
                <div className="flex flex-col gap-8 items-center text-center">
                    <Typography className="text-[clamp(32px,4vw,72px)]">Who Will You Meet?</Typography>
                    <div className="flex items-center justify-center gap-10">
                        {countsData.map((item, index) => (
                            <div key={index} className="flex flex-col gap-2 items-center border border-primary p-6 rounded-lg shadow-md w-75 h-60">
                                <Typography className="text-[clamp(24px,3vw,48px)]">{item.count}</Typography>
                                <span className="text-xl font-semibold">{item.title}</span>
                                <p className="text-lg text-gray-500 text-center">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default WhoWillMeet
