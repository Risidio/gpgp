import ContentManage from './ContentManage'
import ProjectImg from "../../assets/images/project.png"
import ChallengeImg from "../../assets/images/challenge.png"
import InvitationImg from "../../assets/images/gpgp-tile.png"

const contents = [
    {
        name: "The Project",
        description: "The GPGP project is an immersive and transformative exhibition that aims to raise awareness, inspire action, and drive positive change regarding plastic pollution, with a specific focus on the Great Pacific Garbage Patch.",
        Btn: {
            name: "EXPLORE",
            link: "/project"
        },
        Img: ProjectImg,
        ImgPos : "left",
        id: 1,
        rounded:false
    },
    {
        name: "The Challenge",
        description: "Plastics are a major contributor to marine debris. The Great \n Pacific Garbage Patch is a pressing environmental issue that \n requires immediate attention. ",
        Btn: {
            name: "SUPPORT",
            link: "/challenge"
        },
        Img: ChallengeImg,
        ImgPos : "right",
        id: 2,
        rounded:false
    },
    {
        name: "The Invitation",
        description: "The Great Pacific Garbage Patch offers a unique opportunity \n to channel your artistic talents towards a project. Artists of \n all form - painters, sculptors, photographers are invited to \n submit their works for consideration.",
        Btn: {
            name: "TAKE PART",
            link: "/contribute"
        },
        Img: InvitationImg,
        ImgPos : "left",
        id: 3,
        rounded:true
    },
]
const HomeContent = () => {
    return (
        <>
            <ContentManage contents={contents} />
        </>
    )
}

export default HomeContent;