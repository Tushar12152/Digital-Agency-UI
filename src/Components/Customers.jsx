import Container from "../Container/Container";

const Customers = () => {

    const customersInfo=[
        {
            id:1,
            name:'James Cooper',
            title:'Product Designer ',
            description: 'We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions',
            img:'https://i.ibb.co/7CQCc5b/testimonial-avatar03-jim-fahad-digital-1.png'
        },
        {
            id:2,
            name:'James Cooper',
            title:'Product Designer ',
            description: 'We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions',
            img:'https://i.ibb.co/7CQCc5b/testimonial-avatar03-jim-fahad-digital-1.png'
        },
        {
            id:3,
            name:'James Cooper',
            title:'Product Designer ',
            description: 'We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions',
            img:'https://i.ibb.co/7CQCc5b/testimonial-avatar03-jim-fahad-digital-1.png'
        },
        {
            id:4,
            name:'James Cooper',
            title:'Product Designer ',
            description: 'We seek to get involved early in the design phase so that we can manage the project more efficiently, provide effective building solutions',
            img:'https://i.ibb.co/7CQCc5b/testimonial-avatar03-jim-fahad-digital-1.png'
        },
    ]

    return (
        <div>
             <Container>
                 <div className="bg-gray-900 mt-10 ">
                       <h1 className="font-bold text-white text-4xl pl-10 pb-10 pt-20">Some Words From <br /> Our Customers</h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-10 ">
                             {
                                customersInfo.map(card=><div  key={card.id}>
                                    
                                    <div className="bg-white p-10 rounded-xl  relative">
                                         <h1 className="font-bold text-xl pl-2">{card.name}</h1>
                                         <h1 className="font-semibold text-gray-400 text-lg pl-2">{card.title}</h1>
                                         <p className="pl-2">{card?.description}</p>
                                         <div className="bg-blue-400 w-28 p-2 rounded-full absolute border-2 border-black bottom-48 hover:border-yellow-400 cursor-pointer lg:bottom-36 z-10 ">
                                             <img src={card?.img} alt="" />
                                         </div>
                                    </div>
                                      
                                </div>)
                             }
                        </div>

                 </div>
             </Container>
        </div>
    );
};

export default Customers;