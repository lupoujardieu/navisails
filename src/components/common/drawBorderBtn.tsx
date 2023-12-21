import "@styles/components/common/draw-border--btn.scss"

export default function DrawBorderBtn(props: { title: string, url: string }) {
    return <a className="btn draw-border" href={props.url}>{props.title}</a>;
}