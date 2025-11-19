import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const experiences = [
	{ id: 1, i18nKey: 'projects.entries.1' },
	{ id: 2, i18nKey: 'projects.entries.2' },
	{ id: 3, i18nKey: 'projects.entries.3' },
];

export function Projects() {
	const { t } = useContext(LanguageContext);

	return (
		<section id="projects" className="relative py-6 px-6">
			<div className="container mx-auto max-w-4xl">
				<div className="space-y-12">
					<h2 className="text-cyan-400 font-mono flex items-center gap-3">
						<span className="text-cyan-600">02.</span>
						{t('projects.heading')}
					</h2>

					<div className="space-y-8">
						{experiences.map((exp) => {
							const title = t(`${exp.i18nKey}.title`);
							const company = t(`${exp.i18nKey}.company`);
							const duration = t(`${exp.i18nKey}.duration`);
							const description = t(`${exp.i18nKey}.description`);
							const tech: string[] = t(`${exp.i18nKey}.tech`) || [];

							return (
								<div
									key={exp.id}
									className="border border-cyan-950 bg-black/40 p-6 hover:border-cyan-800 transition-all group"
								>
									<div className="space-y-4">
										<div className="flex items-start justify-between">
											<div>
												<h3 className="text-cyan-400 font-mono group-hover:text-green-400 transition-colors">
													{title}
												</h3>
												<p className="text-cyan-600 font-mono text-xs mt-1">
													{company}
												</p>
											</div>

											<div className="text-right flex flex-col items-end">
												<p className="text-cyan-600 font-mono text-xs">
													{duration}
												</p>
											</div>
										</div>

										<p className="text-cyan-600 font-mono text-sm">
											{description}
										</p>

										<div className="flex flex-wrap gap-2">
											{tech.map((tName) => (
												<span
													key={tName}
													className="px-3 py-1 bg-cyan-950/50 border border-cyan-900 text-cyan-500 font-mono text-xs"
												>
													{tName}
												</span>
											))}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
