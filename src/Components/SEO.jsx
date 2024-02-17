import { Link } from "react-router-dom";
import Container from "../Container/Container";
import Title from "../Shared/Title";

const Seo = () => {
  const digitalProduct = [
    {
      id: 1,
      Image: "https://i.ibb.co/Bq9ftyF/download.jpg",
      name: "Facebook Marketing",
    },
    {
      id: 2,
      Image: "https://i.ibb.co/GfZpF3j/download.jpg",
      name: "SEO",
    },
    {
      id: 3,
      Image: "https://i.ibb.co/Bq9ftyF/download.jpg",
      name: "Youtube Marketing",
    },
    {
      id: 4,
      Image: "https://i.ibb.co/GfZpF3j/download.jpg",
      name: "Email Marketing",
    },
  ];

  return (
    <Container>
      <div>
        <Title Heading={"SEO & Marketing Agency"}></Title>
        <h3 className="p-2 bg-gray-400 rounded-full w-48 text-center mx-auto mt-4 text-white">
          Service Details
        </h3>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {digitalProduct.map((card) => (
              <div key={card?.id}>
                <div className="card w-72  bg-base-100 shadow-xl">
                  <figure>
                    <img
                      className="p-4 h-40 rounded-xl"
                      src={card?.Image}
                      alt=""
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{card?.name}</h2>
                     <div className="card-actions justify-end">
                      <Link  to={`order/${card?.id}`} className="btn bg-blue-400 hover:bg-yellow-600 text-white">Purchase</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Seo;
