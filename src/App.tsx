import { LangProvider } from './translation/useTranslationContext';
import { CustomRouter } from './router/CustomRouter';
import { Theme } from './theme/Theme';
import { Grid } from './grid/Grid';

export const App = (): JSX.Element => {
	return (
		<Theme>
			<LangProvider>
					<CustomRouter />
			</LangProvider>
		</Theme>
	);
}