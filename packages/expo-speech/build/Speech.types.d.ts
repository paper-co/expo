export type SpeechEventCallback = (this: SpeechSynthesisUtterance, ev: SpeechSynthesisEvent) => any;
export type NativeBoundaryEvent = {
    charIndex: number;
    charLength: number;
};
/**
 * Native-only callback with parameters related to the word about to be uttered.
 * @platform ios
 * @platform android
 */
export type NativeBoundaryEventCallback = (ev: NativeBoundaryEvent) => void;
export type SpeechOptions = {
    /**
     * The code of a language that should be used to read the `text`, refer to IETF BCP 47 to see
     * valid codes.
     */
    language?: string;
    /**
     * Pitch of the voice to speak `text`. `1.0` is the normal pitch.
     */
    pitch?: number;
    /**
     * Rate of the voice to speak `text`. `1.0` is the normal rate.
     */
    rate?: number;
    /**
     * A callback that is invoked when speaking starts.
     */
    onStart?: () => void | SpeechEventCallback;
    /**
     * A callback that is invoked when speaking is stopped by calling `Speech.stop()`.
     */
    onStopped?: () => void | SpeechEventCallback;
    /**
     * A callback that is invoked when speaking finishes.
     */
    onDone?: () => void | SpeechEventCallback;
    /**
     * A callback that is invoked when an error occurred while speaking.
     * @param error
     * @platform android
     * @platform ios
     */
    onError?: (error: Error) => void | SpeechEventCallback;
    /**
     * Volume of the voice to speak `text`. A number between `0.0` (muted) and `1.0` (max volume)
     *
     * @default 1.0
     * @platform web
     */
    volume?: number;
    /**
     * Voice identifier.
     */
    voice?: string;
    _voiceIndex?: number;
    /**
     * A callback that is invoked when the spoken utterance reaches a word.
     */
    onBoundary?: NativeBoundaryEventCallback | SpeechEventCallback | null;
    onMark?: SpeechEventCallback | null;
    onPause?: SpeechEventCallback | null;
    onResume?: SpeechEventCallback | null;
};
/**
 * Enum representing the voice quality.
 */
export declare enum VoiceQuality {
    Default = "Default",
    Enhanced = "Enhanced"
}
/**
 * Object describing the available voices on the device.
 */
export type Voice = {
    /**
     * Voice unique identifier.
     */
    identifier: string;
    /**
     * Voice name.
     */
    name: string;
    /**
     * Voice quality.
     */
    quality: VoiceQuality;
    /**
     * Voice language.
     */
    language: string;
    /**
     * True if the default voice on the device. See description below.
     *
     * - Android: Uses the TextToSpeech.getDefaultVoice() method to retrieve the default voice for the default Text-to-speech language. [Reference](https://developer.android.com/reference/kotlin/android/speech/tts/TextToSpeech#getdefaultvoice)
     * - iOS: Returns the default AVSpeechSynthesisVoice when instantiated with the user's currentLanguageCode. [Reference](https://developer.apple.com/documentation/avfaudio/avspeechsynthesisvoice/1619707-currentlanguagecode?changes=_7&language=objc)
     * - Web: Uses the SpeechSynthesisVoice.default property indicating whether the voice is the default voice for the current app language. [Reference](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice)
     */
    isDefault: boolean;
};
export type WebVoice = Voice & {
    localService: boolean;
    name: string;
    voiceURI: string;
};
//# sourceMappingURL=Speech.types.d.ts.map