// eslint-disable-next-line react/prop-types
export const CoreConcepts = ({ image, title, description }) => {

    return (
        <li>
            <img src={image} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}