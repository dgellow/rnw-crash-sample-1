#include "pch.h"
#include "SoundPlayer.h"
#include "winrt/Windows.UI.Xaml.h"
#include "winrt/Windows.ApplicationModel.Background.h"

namespace winrt {
	using namespace winrt::Windows::UI::Xaml;
}

namespace NativeModuleSample {
    void SoundPlayer::Play(int effect) noexcept {
        const auto min = static_cast<int>(winrt::ElementSoundKind::Focus);
        const auto max = static_cast<int>(winrt::ElementSoundKind::GoBack);

        if (effect >= min && effect <= max) {
            const auto sound = static_cast<winrt::ElementSoundKind>(effect);
            winrt::ElementSoundPlayer::Play(sound);
        }
    }
}
