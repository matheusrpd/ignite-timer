import { Play } from 'phosphor-react';

export function Home() {
	return (
		<div className="flex-1 flex flex-col items-center justify-center">
			<form className="flex flex-col items-center gap-14">
				<div className="w-full flex justify-center items-center gap-2 text-gray-100 font-bold text-lg flex-wrap">
					<label htmlFor="task">Vou trabalhar em</label>
					<input
						id="task"
						type="text"
						placeholder="Dê um nome para seu projeto"
						className="input flex-1"
						list="task-suggestions"
					/>

					<datalist id="task-suggestions">
						<option value="Projeto 1" />
						<option value="Projeto 2" />
						<option value="Projeto 3" />
					</datalist>

					<label htmlFor="minutesAmount">durante</label>
					<input
						id="minutesAmount"
						type="number"
						placeholder="00"
						className="input w-16"
						step={5}
						min={5}
						max={60}
					/>

					<span>minutos.</span>
				</div>

				<div className="font-mono text-[10rem] leading-[8rem] text-gray-100 flex gap-4">
					<span className="py-8 px-4 bg-gray-700 rounded-lg">0</span>
					<span className="py-8 px-4 bg-gray-700 rounded-lg">0</span>
					<div className="py-8 w-16 text-green-500 overflow-hidden flex justify-center">
						:
					</div>
					<span className="py-8 px-4 bg-gray-700 rounded-lg">0</span>
					<span className="py-8 px-4 bg-gray-700 rounded-lg">0</span>
				</div>

				<button
					type="submit"
					className="w-full border-0 p-4 rounded-lg bg-green-500 text-gray-100 flex justify-center items-center gap-2 font-bold cursor-pointer enabled:hover:bg-green-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
				>
					<Play size={24} />
					Começar
				</button>
			</form>
		</div>
	);
}
