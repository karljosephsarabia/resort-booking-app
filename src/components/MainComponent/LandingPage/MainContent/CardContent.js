import Card from 'react-bootstrap/Card';


export default function CardContent({ resort }) {

    function handleClickCard() {
        console.log(resort);
    }
    return (
        <>
            <Card className="bg-dark text-white w-25 h-100 my-5 main-card-shadow-style" onClick={() => handleClickCard()}>
                <Card.Img className="main-card-images" style={{ height: "300px" }} src={resort.images[0]} alt={resort.title} />
                <Card.ImgOverlay className='d-flex flex-column justify-content-end'>
                    <Card.Title style={{fontSize: "1rem"}}>{resort.title}</Card.Title>
                    <Card.Text style={{fontSize: "0.75rem"}}>{resort.location}</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </>
    );
}