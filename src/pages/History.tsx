const colorsByStatus = {
	green: 'before:bg-green-500',
	yellow: 'before:bg-yellow-500',
	red: 'before:bg-red-500',
};

export function History() {
	return (
		<div className="flex-1 flex flex-col p-14">
			<h1 className="text-2xl text-gray-100">Meu histórico</h1>

			<div className="flex-1 overflow-auto mt-8">
				<table className="w-full border-collapse min-w-[600px]">
					<thead>
						<tr>
							<th className="bg-gray-600 p-4 pl-6 text-left text-gray-100 text-sm leading-5 rounded-tl-lg">
								Tarefa
							</th>
							<th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-5">
								Duração
							</th>
							<th className="bg-gray-600 p-4 text-left text-gray-100 text-sm leading-5">
								Início
							</th>
							<th className="bg-gray-600 p-4 pr-6 text-left text-gray-100 text-sm leading-5 rounded-tr-lg">
								Status
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 pl-6 text-xs leading-5 w-1/2">
								Tarefa teste
							</td>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-xs leading-5">
								20 minutos
							</td>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-xs leading-5">
								Há 2 meses
							</td>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 pr-6 text-xs leading-5">
								<span
									className={`flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full ${colorsByStatus['green']}`}
								>
									Concluído
								</span>
							</td>
						</tr>
						<tr>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 pl-6 text-xs leading-5 w-1/2">
								Tarefa teste
							</td>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-xs leading-5">
								20 minutos
							</td>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-xs leading-5">
								Há 2 meses
							</td>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 pr-6 text-xs leading-5">
								<span
									className={`flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full ${colorsByStatus['red']}`}
								>
									Interrompido
								</span>
							</td>
						</tr>
						<tr>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 pl-6 text-xs leading-5 w-1/2">
								Tarefa teste
							</td>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-xs leading-5">
								20 minutos
							</td>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-xs leading-5">
								Há 2 meses
							</td>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 pr-6 text-xs leading-5">
								<span
									className={`flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full ${colorsByStatus['yellow']}`}
								>
									Em andamento
								</span>
							</td>
						</tr>
						<tr>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 pl-6 text-xs leading-5 w-1/2">
								Tarefa teste
							</td>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-xs leading-5">
								20 minutos
							</td>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 text-xs leading-5">
								Há 2 meses
							</td>
							<td className="bg-gray-700 border-t-4 border-solid border-gray-800 p-4 pr-6 text-xs leading-5">
								<span
									className={`flex items-center gap-2 before:content-[''] before:w-2 before:h-2 before:rounded-full ${colorsByStatus['red']}`}
								>
									Interrompido
								</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
