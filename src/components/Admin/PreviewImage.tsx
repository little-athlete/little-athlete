import Image from 'next/image'

const PreviewImage = ({ src, alt }: { src?: string; alt?: string }) => {
	return <Image src={String(src)} width={240} height={240} alt={String(alt)} />
}

export default PreviewImage
