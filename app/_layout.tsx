import { GameContext } from '@/contexts/Game';
import { BallData } from '@/types/game';
import { useSharedValue } from 'react-native-reanimated';
import { boardHeight, width, ballRadius } from '@/constants/Game';
import { Slot } from 'expo-router';

import '@/global.css';

export default function HomeScreen() {
	const ball = useSharedValue<BallData>({
		x: width / 2,
		y: boardHeight - ballRadius,
		r: ballRadius,
		dx: 1,
		dy: -1,
	});
	return (
		<GameContext.Provider value={{ ball }}>
			<Slot />
		</GameContext.Provider>
	);
}
