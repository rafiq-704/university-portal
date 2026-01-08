import Container from "../components/Container";

const TheGrandFinale = () => {
  return (
    <section className="bg-gray-100">
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 px-20  py-6 bg-white shadow-md text-center max-w-4xl mx-auto rounded-xl">
          <h2 className="text-[clamp(24px,4vw,32px)] font-bold">
            The Grand Finale: Networking
          </h2>

          <p className="text-gray-500 text-md text-center leading-relaxed">
            Conclude the BSSE Career Day with a relaxed and inspiring networking
            apéro. This informal setting offers the perfect opportunity to
            connect with fellow students, company representatives, and speakers
            while enjoying refreshments.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default TheGrandFinale;
