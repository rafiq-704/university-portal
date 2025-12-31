'use client'
import Button from "../components/Button"
import Container from "../components/Container"
import { redirectToExternal } from "../components/RedirectToExternal"

const CTA = () => {
    return (
        <Container className=" flex items-center justify-center">
            <Button label="Register Your Company" btnType="secondary" onClick={() => redirectToExternal("https://forms.gle/GKHJ9u1uvaA8n9vf6")} />
        </Container>
    )
}

export default CTA
