export const ImageToggle: React.FC<{ toggleImage: () => void }> = ({
    toggleImage,
  }) => <button onClick={toggleImage}>Toggle Image</button>;