import Container from "../Container/Container";
import Title from "../Shared/Title";

const WebDev = () => {

    const cardInfo=[
        {
            id:1,
            img:'https://i.ibb.co/q1rWVhv/download.png',
            title:'Trendy Design',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id:2,
            img:'https://i.ibb.co/q1rWVhv/download.png',
            title:'Trendy Design',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id:3,
            img:'https://i.ibb.co/q1rWVhv/download.png',
            title:'Trendy Design',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id:4,
            img:'https://i.ibb.co/q1rWVhv/download.png',
            title:'Trendy Design',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ]

    return (
        <Container>
            <div>
             <Title Heading={'Web Development'}></Title>
             <h3 className="p-2 bg-gray-400 rounded-full w-48 text-center mx-auto mt-4 text-white">Service Details</h3>

              <div>
                

                 <div className="bg-blue-200 relative rounded-tl-full rounded-tr-full mt-28">
                 <img className="absolute bottom-60 left-[295px] lg:block hidden" src={'https://i.ibb.co/NVFQR8m/Web-Design-services-details-jim-fahad-digital-1.png'} alt="" />
                      <div className="min-h-screen">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  ">
                          {cardInfo.map(item=><div key={item?.id}>
                            <div className="shadow-2xl  p-6">
                                 <img className="w-10 mx-auto " src={item?.img} alt="" />
                                 <h1 className="font-bold text-lg text-center">{item?.title}</h1>
                                 <p className="text-center">{item?.description}</p>
                            </div>
                          </div>)}
                          </div>
                      </div>
                 </div>
               
              </div>
             
        </div>
        </Container>
    );
};

export default WebDev;