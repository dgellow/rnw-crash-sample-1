#include "pch.h"
#include "ReactPackageProvider.h"
#include "NativeModules.h"

#include "FancyMath.h"
#include "SoundPlayer.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::blablabla::implementation
{

void ReactPackageProvider::CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept
{
    AddAttributedModules(packageBuilder);
}

} // namespace winrt::blablabla::implementation
