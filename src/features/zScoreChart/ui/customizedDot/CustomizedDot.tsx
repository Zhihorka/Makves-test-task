export const CustomizedDot = (props: any) => {
    console.log('props is', props)
    const { cx, cy, value } = props;

    if (Math.abs(value) > 1) {
        return (
            <svg x={cx - 4} y={cy - 4} width={20} height={20} fill="red" viewBox="0 0 1024 1024">
                <circle cx="200" cy="200" r="175"/>
            </svg>
        );
    }

    return (
        <svg x={cx - 4} y={cy - 4} width={20} height={20} fill="black" viewBox="0 0 1024 1024">
            <circle cx="200" cy="200" r="175"/>
        </svg>
    );
};