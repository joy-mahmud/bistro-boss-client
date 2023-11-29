

const SectionTitle = ({Heading,subHeading}) => {
    return (
        <div className='flex flex-col items-center gap-2 justify-center mt-10'>
            <p className="text-yellow-400 text-xl">---{subHeading}---</p>
          <h2 className='uppercase text-4xl font-medium p-3 border-t-2 border-b-2 text-center mb-10 w-4/12'>{Heading}</h2>
          </div>
    );
};

export default SectionTitle;