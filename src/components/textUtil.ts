//유틸리티 함수 구현
export const makeClassName = (setting: string, _className?: string, numberOfLines?: number) =>
    [setting,
        numberOfLines ? `line-clamp-${numberOfLines}` : '',
        _className]
        .join(' ')