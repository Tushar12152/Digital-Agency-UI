import { Link } from "react-router-dom";
import Container from "../Container/Container";


const Category = () => {

    const CategoriesData=[
        {
            id:1,
            logo:'https://i.ibb.co/4twGkHW/Services-UIUX-Jim-Fahad-Digital-1.png',
            title:'UI/UX Design',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            to:'/ui'
        },
        {
            id:2,
            logo:'https://i.ibb.co/mN3Py42/Services-Web-Design-Jim-Fahad-Digital-1.png',
            title:'Web Design',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            to:'/web'
        },
        {
            id:3,
            logo:'https://i.ibb.co/PrmG54X/Services-Branding-Jim-Fahad-Digital-1.png',
            title:'Branding',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id:4,
            logo:'https://i.ibb.co/YNy1vkd/seo-1-1.png',
            title:'SEO',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            to:'/seo'
        },
        {
            id:5,
            logo:'https://i.ibb.co/Mg382hJ/logo-design-1.png',
            title:'Logo Design',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            to:'/logo'
        },
        {
            id:6,
            logo:'https://i.ibb.co/xgs5PKg/ppc-1.png',
            title:'PPC',
            description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
    ]


    return (
        <div>
             <Container>
                    <div className="bg-gray-400 rounded-2xl mt-20">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-16">
                               {
                                  CategoriesData.map(data=><div key={data.id}>
                                      
                                    <Link to={data?.to}>
                                    <div className="hover:bg-white  transition-shadow rounded-xl m-4 p-8 w-[80%]">
                                           <img className="w-20" src={data.logo} alt="" />
                                           <h1 className="font-bold text-2xl py-5 text-black">{data?.title}</h1>
                                           <p className="pr-12">{data?.description}</p>

                                           <a className="mt-10 font-bold" href="#">Learn more →</a>
                                      </div>
                                    </Link>
                                       
                                  </div>)
                               }
                          </div>
                    </div>
             </Container>
        </div>
    );
};

export default Category;