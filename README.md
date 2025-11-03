# 비밀번호 찾기

## 1. 사전 준비

- `/src/app/(default)/signin/page.tsx` 업데이트

```tsx
<div className='flex flex-col gap-2'>
  <Link className='text-muted-foreground hover:underline' href={'/signup'}>
    계정이 없으시다면? 회원가입
  </Link>
  <Link
    className='text-muted-foreground hover:underline'
    href={'/forget-password'}
  >
    비밀번호를 잊으셨나요?
  </Link>
</div>
```

- `/src/app/(default)/forget-password/page.tsx`
- UI 작업
