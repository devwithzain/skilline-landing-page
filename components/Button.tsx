import { TbuttonProps } from "@/types";

export default function Button({ title, className }: TbuttonProps) {
	return (
		<button className={`paragraph font-medium rounded-full ${className}`}>
			{title}
		</button>
	);
}
