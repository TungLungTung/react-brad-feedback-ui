import Card from '../components/shared/Card';

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea porro,
          labore deleniti corporis dicta maiores commodi repudiandae? Id natus
          qui odit, iure quas illo molestias magnam culpa veniam adipisci iste.
        </p>
        <p>
          {/* LINK inside here */}
          <a href="/">Go to Home</a>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
