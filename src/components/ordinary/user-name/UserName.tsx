export const UserName = ({ name }: { name: string }) => (
	<div className='px-container-sm'>
		<h3 className='overflow-hidden text-ellipsis text-nowrap text-center text-[1.35rem] font-semibold leading-[1.85rem] text-black/80'>
			{name}
		</h3>
	</div>
);
