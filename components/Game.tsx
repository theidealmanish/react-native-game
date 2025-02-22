import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, View } from 'react-native';
import Ball from '@/components/Ball';
import { boardHeight } from '@/constants/Game';
import { useGameContext } from '@/contexts/Game';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

export default function Game() {
	const { ball, isUserTurn } = useGameContext();
	const pan = Gesture.Pan().onUpdate((e) => {
		const x = e.translationX;
		const y = e.translationY;
		console.log('Dragging!', e.translationX, e.translationY);
	});

	return (
		<SafeAreaView className='w-full h-full'>
			<GestureDetector gesture={pan}>
				<View
					className={`w-full`}
					style={{
						height: boardHeight,
						backgroundColor: 'black',
					}}
				>
					<Ball ball={ball} />
				</View>
			</GestureDetector>

			<View className='mt-4'>
				<Button title='Move Ball' onPress={() => (isUserTurn!.value = false)} />
			</View>
		</SafeAreaView>
	);
}
