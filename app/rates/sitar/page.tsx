const SitarRates = () => {
  return (
    <div className="mx-auto max-w-2xl p-6">
      <h1 className="mb-4 text-2xl font-bold">Rates for Sitar Performances</h1>
      <p className="mb-4">
        Thank you for your interest in having me share my music at your event. I
        am excited to co-create with you and ensure that working with me is a
        positive and enjoyable experience.
      </p>
      <p className="mb-4">
        Below, I’ve outlined my rates, along with flexible options to keep my
        music accessible to all. My goal is to build a meaningful connection
        that inspires future collaborations.
      </p>

      {/* Rates Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">
          Typical Rates for a 2-hour Engagement
        </h2>
        <ul className="mb-4 space-y-2">
          <li>
            <strong>Community Events:</strong> $250 - $500
          </li>
          <li>
            <strong>Private Events:</strong> $450 - $750
          </li>
          <li>
            <strong>Corporate Events:</strong> $1000 - $2500
          </li>
        </ul>
        <p className="mb-4">
          These rates reflect the time and effort involved in preparing for and
          performing at your event, including setup and travel.
        </p>
        <p className="italic">
          Note: I do not typically offer lower rates for shorter performances,
          as the preparation and effort required remain the same regardless of
          duration.
        </p>
        <p>
          If you’d like an ensemble (e.g., percussion, violin, piano), I have a
          network of talented musicians. Rates for solo performances can be
          adjusted to accommodate ensembles ranging from duos to a full 7-piece
          fusion band.
        </p>
      </section>

      {/* Energy Exchange Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Energy Exchange Options</h2>
        <p className="mb-4">
          For those unable to meet my financial rate, I’m open to creative
          alternatives that honor the value of my music. Examples of past
          exchanges include:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-5">
          <li>Free yoga classes</li>
          <li>Lessons (e.g., movement, meditation)</li>
          <li>Access to retreats</li>
          <li>Acupuncture sessions</li>
        </ul>
        <p>
          Have an idea for an exchange? Let me know! I value generosity and
          creativity in finding solutions that work for both of us.
        </p>
      </section>

      {/* Why These Rates Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">Why These Rates?</h2>
        <p className="mb-4">My rates reflect:</p>
        <ul className="mb-4 list-disc space-y-2 pl-5">
          <li>20+ years of professional performance experience.</li>
          <li>
            Formal training at Northwestern University’s Bienen School of Music.
          </li>
          <li>Extensive global study of music in Spain, Brazil, and India.</li>
        </ul>
        <p>
          My performances are the result of a lifetime dedicated to mastering my
          craft.
        </p>
      </section>

      {/* Accessibility Section */}
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">
          Accessibility and My Philosophy
        </h2>
        <p className="mb-4">
          Music is my calling, and I believe it should be accessible to
          everyone. Growing up with limited means, music transformed my life. I
          aim to honor my guru, Raja Angara, who never charged me for lessons
          but asked that I master the music and share it with the world.
        </p>
        <p>
          If my rates are not feasible, I’m happy to explore options that ensure
          money is never a barrier.
        </p>
      </section>

      {/* Call to Action */}
      <section>
        <h2 className="mb-4 text-xl font-semibold">Let’s Make It Work</h2>
        <p className="mb-4">
          If you’d like to book me for your event, please reach out with:
        </p>
        <ul className="mb-4 list-disc space-y-2 pl-5">
          <li>
            <strong>Event details:</strong> date, time, location, and type of
            event.
          </li>
          <li>
            <strong>Budget or proposed energy exchange.</strong>
          </li>
        </ul>
        <p>
          Together, we can create a meaningful experience that honors the value
          of my music and supports your vision. Thank you for considering me to
          be a part of your special occasion!
        </p>
      </section>
    </div>
  );
};

export default SitarRates;
