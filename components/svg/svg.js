export default function Svg({icon, size}) {
    return (
        <svg style={{ width: size, height: size}}>
            <use xlinkHref={`directory/icons/orion-svg-sprite.svg#${icon}`}></use>
        </svg>
    )
}