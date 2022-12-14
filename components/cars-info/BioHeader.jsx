import Image from 'next/image'

  function BioHeader({ manufacturer, model, image }) {
    return (
      <header className="max-w-2xl mb-16">
        <Image src={image}
                    width={150}
                    height={150} 
                    className="rounded-full border border-gray-400/20 p-1 bg-gray-400/10"
                    />
        <h1 className="text-4xl font-bold   text-zinc-800">
        This is the full description of {manufacturer} {model}
        </h1>
        <p className="mt-6 text-base text-zinc-600 ">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, accusamus libero dicta tempore in illum eligendi at ex facere consectetur nihil necessitatibus ipsa aspernatur nesciunt fuga rem, sapiente dolorem porro! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda tempore odio temporibus amet doloribus id accusamus dolorum, eligendi ad facilis, sint necessitatibus nobis unde repudiandae dolor optio mollitia quasi. Eos?
        </p>

      </header>
    );
  }
  
  export default BioHeader;
  