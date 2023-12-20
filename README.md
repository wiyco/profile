# wiyco

A profile site w/ Vercel & Supabase.

## Blog

About the blog page.

### Original ID

I have configured an original ID generation function as the default value in the database.

```sql
create or replace function public.id_generate_v1(length integer)
returns text
language plpgsql
as $$
declare
  chars text[] := '{_,-,=,0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z}';
  result text := '';
  i integer := 0;
begin
  if length < 0 then
    raise exception 'Given length cannot be less than 0';
  end if;
  for i in 1..length loop
    result := result || chars[1+random()*(array_length(chars, 1)-1)];
  end loop;
  return result;
end;
$$;
```

---

🐢
