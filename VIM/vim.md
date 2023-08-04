1. gg - go to the top of the page
2. G - go to the bottom of the page
3. 0 - go to the starting of the line even if spaces are there it goes to the atmost start of the line
   \*\* ^ - go to the start of the line where words begin
4. $ - go to the end of the line
5. w- go to the first character of the next word
6. e - go to the end character of the next word
7. b - go to the first character of the previous word
8. W, E, B - does the same work as the above commands but skips the other characters and traverses through words only
9. / - forward search
10. ? - backward search
11. h(<-, l(->)
12. j(down, k(up)
13. dd - delete entire line
14. dw - delete word

- \*_ Number_ dw => delete N number of words

1.  d$ - delete till the end of the line from the cursor

- d^ - deletes till the start of the line from the cursor

15. p - paste
16. yy - copy the entire line
17. yw - copy the word
18. y$ - copy till the end of the line from the cursor
19. :%s/wordtobepalced/replacingword/g - entire document changes (if we use gc in the end it asks for y or n for every instance
20. :form,to s/ wordtobepalced/replacingword/g - certain number of lines
21. ctrl+ V - select over a certain area
22. V - select over line
23. x - delete character
24. s- delete character and goes to insert mode
25. r - replace text
26. c- change -> goes to the insert mode deleting that word
27. c$ => deletes from cursor and goes to insert mode
28. cw => deletes that word and goes to insert mode
29. n - goes to the next instance of the word
30. N - goes to the previous instance of the word
31. f - followed by character => moves till the next character is found
32. F - same as above but reverse search
33. H - goes to the top of the visible screen
34. L - goes to the bottom of the visible screen
35. M - goes to the mid of the visible screen
36. ctrl + enter => create a new line
37. ddp - moves the line down
38. ddkP - move line up
39. ddp - moves the line down
