import React from 'react';

const ImageComponent = ({src}) => (
    <div className="w-10 h-10 relative -mr-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
            <img className="w-10 h-10 rounded-full bg-center bg-no-repeat bg-cover flex justify-center items-center object-cover hover:opacity-90 transition-opacity border-1 border-white  bg-white" 
                 src={src} 
                 alt="" 
                 width="40" 
                 height="40" 
            />
        </div>
    </div>
);

const LoginHero = () => {
    return (
        <div className="hidden lg:flex flex-col gap-y-12 h-full lg:w-[424px]">
            <img src='/TravelMate.svg' alt="Logo" className="hidden md:block object-cover"/>
            
            <h1 className="text-[56px] font-instrument leading-[110%] text-primary">Connect with the most <i>(in)credible</i> travellers!</h1>
            <div className="flex items-center">
             <ImageComponent src="https://dqy38fnwh4fqs.cloudfront.net/UHKKLDARKOAPQB6CDGQ8PL889QL8/825cb09d-28a4-475b-b946-15c7fc61d9fc.png" />
             <ImageComponent src="https://dqy38fnwh4fqs.cloudfront.net/UH7BD8O8OG7N8JB2NEGGMJ8NLMKJ/7adac25a-3c7f-4480-951b-40d61fd545c2.jpg" />
             <ImageComponent src="https://lh3.googleusercontent.com/a/ALm5wu0Ott-mI6yuLc_vjGx8cjdU40v9HGko42tWfqzj=s96-c" />
             <ImageComponent src="https://dqy38fnwh4fqs.cloudfront.net/UHQ7BQOJRQLQK9L1O7797MR6AEEP/hq7bqojrqlqk9l1o7797mr6aeep-profile.webp" />
            
             <span className="text-sm text-gray-gray5  font-normal ml-4">Join 50000+ peers.</span>
            </div>
        </div>
    );
};

export default LoginHero;