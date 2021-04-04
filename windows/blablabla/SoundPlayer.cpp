#include "pch.h"
#include "SoundPlayer.h"
#include "winrt/Windows.UI.Xaml.h"

namespace winrt {
	using namespace winrt::Windows::UI::Xaml;
}

namespace NativeModuleSample {
	void SoundPlayer::Initialize(React::ReactContext const& context) noexcept {
		this->_context = context;
	}

	void SoundPlayer::Play(int effect) noexcept {
		const auto min = static_cast<int>(winrt::ElementSoundKind::Focus);
		const auto max = static_cast<int>(winrt::ElementSoundKind::GoBack);

		if (effect >= min && effect <= max) {
			const auto sound = static_cast<winrt::ElementSoundKind>(effect);
			this->_context.UIDispatcher().Post([sound]() {
				const auto origState = winrt::ElementSoundPlayer::State();
				winrt::ElementSoundPlayer::State(winrt::ElementSoundPlayerState::On);
				const auto newState = winrt::ElementSoundPlayer::State();
				const auto volume = winrt::ElementSoundPlayer::Volume();
				winrt::ElementSoundPlayer::Play(sound);
				});
		}
	}
}
