const Partner = ({ partner }) => {
    if (!partner) return null;
    const { image, name, description } = partner;
    return (
        <>
            <img src={image} alt={name} style={{ width: '150px' }} />
            <div className='m-4'>
                <h5 className='fw-bold'>{name}</h5>
                {description}
            </div>
        </>
    );
};

export default Partner;